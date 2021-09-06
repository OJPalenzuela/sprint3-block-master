import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardNew, Edit, startUploading } from '../../actions/cardActions';
import * as Yup from 'yup'
import '../../style/styleEdit.css'
import { useHistory } from "react-router-dom";

const EditCard = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { active } = useSelector(state => state.card)

    const activeId = useRef(active.id)

    const formik = useFormik({
        initialValues: { ...active },

        validationSchema: Yup.object({
            title: Yup.string().required(),
            overview: Yup.string().required(),
            file: Yup.string().required()
        }),

        onSubmit: (data) => {
            if (active.title === "") {
                dispatch(CardNew(data))

            } else if (active.id !== "") {
                dispatch(Edit(data))
            }
            console.log(data)

            formik.resetForm()
            history.push("/")
        }

    })

    useEffect(() => {
        if (active.id !== activeId.current) {
            formik.resetForm();
        }
        activeId.current = active.id
    }, [active, formik])

    const handleFileChange = async (e) => {
        if (e.target.files[0]) {
            const fileUrl = await dispatch(startUploading(e.target.files[0]))
            const inputFileUrl = document.getElementById("fileinput")
            console.log(fileUrl)
            inputFileUrl.value = fileUrl
            formik.values.file = fileUrl
        }
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    return (
        <div className="edit-container">
            <div className="edit">
                <h2>Agregar nueva tarea</h2>

                <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control mt-1"
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="overview"
                            className="form-control mt-1"
                            placeholder="Descripción"
                            value={formik.values.overview}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>


                        <input
                            id="fileSelector"
                            type="file"
                            name="fileInput"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />

                        <input
                            type="text"
                            placeholder="Url"
                            name="file"
                            disabled
                            id="fileinput"
                            className="inputFile linkFile"
                            value={formik.values.file}
                        />

                        <div
                            className="btn btn-secondary shadow-sm inputFile"
                            onClick={handlePictureClick}
                        >Picture</div>
                    </div>
                    
                    <div className="save-div">
                    <input type="submit" className="btn btn-primary save" value="Guardar" />

                    </div>

                </form>
            </div>

        </div>
    )
}

export default EditCard
