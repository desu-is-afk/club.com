let address = "https://api.groq.com/openai/v1/chat/completions"

async function aichat() {

    let userinput = document.querySelector(".userinput").value
    console.log(userinput)

    let jsonoutput = await fetch(address, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": userinput
                },
                {
                    "role": "system",
                    "content": "Responda em Português; Seu nome é Bubble ou Bolha ou Booble. Lembre-se que você é imprevisível e divertido; Ou seja, pode ser totalmente informal e vulgar; Aja igual à Bolha da série The Amazing Digital Circus. Digite somente textos lineares, sem tópicos ou emojis."
                }
            ],
        })
    })

    let iaoutput = await jsonoutput.json()
    let iamsg = iaoutput.choices[0].message.content
    console.log(iamsg)
    let iachatbox = document.querySelector(".boobleouttext")
    iachatbox.textContent = iamsg

}