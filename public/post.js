const postFormHandler = async (event) => {
    event.preventDefault();
    console.log(event)
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();



    const response = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { 'Content-Type': 'application/json' },

    });

    if (response.ok) {
        document.location.replace('/dashboard');

    };
}
document.querySelector('.post-form').addEventListener('submit', postFormHandler)


async function deletePost(e) {
    const event = e.target
    console.log(event)
    console.log(event.id)

    await fetch(`/api/post/delete/${event.id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: event.id
        }),
        headers: { 'Content-Type': 'application/json' },

    });
    location.reload();
}




