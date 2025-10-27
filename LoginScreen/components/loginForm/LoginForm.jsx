import {useState} from 'react';
import { Form } from 'react-bootstrap';
import './LoginForm.css';
import { useNavigate  } from 'react-router-dom';

export default function LoginForm(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChangeInEmail = (e) => {
        setFormData(() => ({ ...formData, email: e.target.value }));
    };

    const handleChangeInPassword = (e) => {
        setFormData(() => ({ ...formData, password: e.target.value }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
  try {
    const response = await fetch('http://localhost:8080/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    navigate
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

    return( 
        <div className="LoginForm">
            <Form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChangeInEmail} />
                </Form.Group>
                <Form.Group   controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChangeInPassword} />
                </Form.Group>
                <button variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </div>  
    );
};