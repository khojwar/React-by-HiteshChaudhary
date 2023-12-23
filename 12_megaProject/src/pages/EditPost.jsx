import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'


const EditPost = () => {
    const navigate = useNavigate()
    const { slug } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then(post => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost