const scriptURL = 'https://script.google.com/macros/s/AKfycbzdhZoF59snCQ5VZ_ZyymDQCaFKBz5XSqbHawL1xNOiPm9sQW4xWKHKPUV4rauohAEw4w/exec'
        const form= document.forms[ 'submit-to-google-sheet1']

        form.addEventListener('submit', e=>{
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log ('Sucess!', response))
            .catch(error => console.error('Error!' , error.message))
            form.reset();
        })