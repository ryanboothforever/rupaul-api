document.querySelector('#submit').addEventListener('click', showQueen)

function showQueen(){
    let queenFirst = document.querySelector('#first-name').value
    let queenLast = document.querySelector('#last-name').value
    function queensName(first, last){     
        first = queenFirst[0].toUpperCase() + queenFirst.slice(1).toLowerCase()
        last = queenLast
            if(queenLast == ''){
                return (first)
            }
             else {
                last = queenLast[0].toUpperCase() + queenLast.slice(1).toLowerCase() 
                first = queenFirst[0].toUpperCase() + queenFirst.slice(1).toLowerCase()
                return (first + '%20' + last)
            }

    }
queensName(queenFirst, queenLast)
    let entry = queensName()
    let url = 'https://www.nokeynoshade.party/api/queens?name=' + entry

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data[0].name
            document.querySelector('img').src = data[0].image_url
            document.querySelector('q').innerText = data[0].quote
        })
        .catch(err => {
            console.log(`Oh no: ${err}`);
        })

}
