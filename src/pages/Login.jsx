import { useState } from "react"
import { Link } from "react-router-dom"


export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="login-page">
            <div className="login-page-container width">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button>Sign in</button>
                    <span>Don’t have an account? <Link>Create one now</Link></span>
                </form>
            </div>
        </div>
    )
}