const jokecontent = document.querySelector(".js-jokecontent");
const jokebtn = document.querySelector(".js-newjoke");
const jokerloader = document.querySelector(".js-loadingstate");


const fetchJoke = () =>{
    removeLoader();
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    }).then((response) => response.json())
}

const showLoader = () => {
    jokerloader.classList.remove("u-hidden")
    jokecontent.classList.add("u-hidden")
}
const removeLoader = () => {
    jokerloader.classList.add("u-hidden")
    jokecontent.classList.remove ("u-hidden")
}

const generateJoke = async () =>  {
    showLoader();
    const { joke } = await fetchJoke()
    jokecontent.innerHTML = joke
}

const init = function () {
    console.log('script loaded');
    generateJoke();

    jokebtn.addEventListener("click", generateJoke)
}

init();