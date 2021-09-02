import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardNew, Edit, startUploading } from '../../actions/cardActions';
import { useForm } from '../../hooks/useForm';

const EditCard = () => {
    const dispatch = useDispatch()
    const { active } = useSelector(state => state.card)

    const [values, handleInputChange, reset ] = useForm(active)

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active, reset])

    const { title, overview, file } = values

    const handleFileChange = (e) => {
        console.log(file)
        if (e.target.files[0]) {
            dispatch(startUploading(e.target.files[0]))
        }
    }

    const handlNewCard = (e) => {
        e.preventDefault();

        if (active.title === "") {
            dispatch(CardNew(values))
            reset()
        } else if (active.id !== "") {
            dispatch(Edit(values))
        }
        //dispatch(clearCard())
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    return (
        <div className="card container text-center">
            <h2>Agregar nueva tarea</h2>
            <form className="card-body " onSubmit={handlNewCard}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control mt-1"
                        placeholder="Title"
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="overview"
                        className="form-control mt-1"
                        placeholder="Descripción"
                        value={overview}
                        onChange={handleInputChange}
                    />
                </div>
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <div>
                    <input
                        type="button"
                        className="btn border-bottom shadow-sm"
                        value="Picture"
                        onClick={handlePictureClick}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                    Save
                </button>
            </form>
        </div>
    )
}

export default EditCard
