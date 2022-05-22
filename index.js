let a=document.querySelector("#member-1")
    let b=document.querySelector("#member-2")
    let c=document.querySelector("#member-3")
    function rollDice()
    {
        let arr= []
        event.preventDefault()
        a.innerText=Math.floor(Math.random() * (6 - 1) + 1)
        arr.push(a.innerHTML)
        b.innerHTML=Math.floor(Math.random() * (6 - 1) + 1)
        arr.push(b.innerHTML)
        c.innerHTML=Math.floor(Math.random() * (6 - 1) + 1)
        arr.push(c.innerHTML)
        arr.sort(function (a,b){
            return a-b;
        })
        let d=document.querySelector("#winner")
        d.innerHTML=arr[arr.length-1]
        if(a.innerHTML===arr[arr.length-1])
        {
            if(b.innerHTML===arr[arr.length-2])
            {
                b.style.color="yellow"
                c.style.color="red"
                a.style.color="green"
            }
            else if(c.innerHTML===arr[arr.length-2])
            {
                c.style.color="yellow"
                b.style.color="red"
                a.style.color="green"
            }
        }
        else if(a.innerHTML===b.innerHTML)
        {
            b.style.color="blue"
            a.style.color="blue"

        }
        else if(c.innerHTML===b.innerHTML)
        {
            b.style.color="blue"
            c.style.color="blue"

        }
        else if(a.innerHTML===c.innerHTML)
        {
            c.style.color="blue"
            a.style.color="blue"

        }
        else if(a.innerHTML===c.innerHTML===b.innerHTML)
        {
            c.style.color="blue"
            a.style.color="blue"
            b.style.color="blue"

        }
        else if(b.innerHTML===arr[arr.length-1])
        {
            if(a.innerHTML===arr[arr.length-2])
            {
                a.style.color="yellow"
                c.style.color="red"
                b.style.color="green"
            }
            else if(c.innerHTML===arr[arr.length-2])
            {
                c.style.color="yellow"
                a.style.color="red"
                b.style.color="green"
            }
        }
        else if(c.innerHTML===arr[arr.length-1])
        {
            if(b.innerHTML===arr[arr.length-2])
            {
                b.style.color="yellow"
                a.style.color="red"
                c.style.color="green"
            }
            else if(a.innerHTML===arr[arr.length-2])
            {
                a.style.color="yellow"
                b.style.color="red"
                c.style.color="green"
            }
        }
        
    }