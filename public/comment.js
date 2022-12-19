async function commentPost(e) {
    const event = e.target
    console.log(event)
    console.log(event.id)
    const content = 'comment'
    console.log(content)

    await fetch(`/api/comment/create`, {
        method: 'POST',
        body: JSON.stringify({
            content: content,
            PostId: event.id
        }),
        headers: { 'Content-Type': 'application/json' },

    });
    location.reload();
}