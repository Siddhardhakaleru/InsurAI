

export default function Dashboard(){
    const handleGetPosts = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/v1/users/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

    return(
        <div className="Dashboard">
            <h2>Welcome to the Dashboard</h2>

            <button onClick={handleGetPosts} variant="primary">
                get posts
            </button>
        </div>
    );
}