import { useContext, useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../main';
import { createFilm, fetchGenres } from '../../http/FilmAPI';
import { observer } from 'mobx-react-lite';




export const CreateFilm = observer(({show, onHide}) => {
    const {film} = useContext(Context)

    const [name, setName] = useState('')
    const [release_year, setReleaseYear] = useState([])
    const [file, setFile] = useState(null)
    const [rating, setRating] = useState('')
    const [director, setDirector] = useState('')
    const [smallDesc, setSmallDesc] = useState('')
    const [bigDesc, setBigDesc] = useState('')
    const [country, setCountry] = useState('')

    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addFilm = () => {
      const rate = Number.parseFloat(rating)
      const formData = new FormData()
      formData.append('name', name)
      formData.append('release_year', `${release_year}`)
      formData.append('img_card', file)
      formData.append('rating', `${rate}`)
      formData.append('director', director)
      formData.append('small_description', smallDesc)
      formData.append('big_description', bigDesc)
      formData.append('counrty', country)
      formData.append('genreId', film.selectedGenre.id)
      createFilm(formData).then(data => onHide())


    }

    useEffect(() => {
        fetchGenres().then(data => {
            film.setGenres(data)
        })
        
    })
    return(
        <>
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить Фильм
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
                <Dropdown.Toggle>{film.selectedGenre.name || "Выберите жанр"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {film.genres.map(genre =>
                        <Dropdown.Item 
                          onClick={() =>{
                            
                            film.setSelectedGenre(genre)
                            // console.log(film.selectedGenre.name)

                          } 
                            


                          }
                             
                          key={genre.id}
                          >{genre.name}</Dropdown.Item>
                    )}
                    
                </Dropdown.Menu>

            </Dropdown>
            <Form.Control
              value = {name} 
              onChange={e => setName(e.target.value)}
              className='mt-3' 
              placeholder='Введите название фильма'
            />
            <Form.Control 
              value={release_year}
              onChange={e => setReleaseYear(Number(e.target.value))}
              className='mt-3' 
              placeholder='Введите год выпуска фильма' 
              type='number'/>
            <Form.Control 
              className='mt-3' 
              placeholder='' 
              onChange={selectFile} 
              type='file'/>
            <Form.Control 
              value={rating}
              onChange={e => setRating(e.target.value)}
              className='mt-3' 
              placeholder='Введите рейтинг фильма' 
              />
            <Form.Control
              value={director}
              onChange={e => setDirector(e.target.value)} 
              className='mt-3' 
              placeholder='Введите имя режиссёра' />
            <Form.Control 
              value={smallDesc}
              onChange={e => setSmallDesc(e.target.value)}
              className='mt-3' 
              placeholder='Напишите краткое описание фильма' />
            <Form.Control
              value={bigDesc}
              onChange={e => setBigDesc(e.target.value)} 
              className='mt-3' 
              placeholder='Напишите полное описание фильма'/>
            <Form.Control 
              value={country}
              onChange={e => setCountry(e.target.value)}
              className='mt-3' 
              placeholder='Введите страну создания фильма'/>




        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        <Button variant={'outline-success'} onClick={addFilm}>Добавить</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
})