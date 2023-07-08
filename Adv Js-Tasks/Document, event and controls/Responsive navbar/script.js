function page() {
    document.body.style.margin = '0 auto'

    const div = document.createElement('div');
    document.body.appendChild(div);

    const header = document.createElement('header');
    header.style.borderBottom = '1px solid';
    header.style.boxShadow = '0px 3px 12px black';
    header.width = "100%";
    div.appendChild(header);

    const nav = document.createElement('nav');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    header.appendChild(nav);

    let classes = ['n1', 'n2', 'n3'];
    for (let i = 0; i < classes.length; i++) {
        const pdiv = document.createElement('div');
        pdiv.className = classes[i];
        pdiv.id = classes[i];
        nav.appendChild(pdiv);

        if (pdiv.className == 'n1') {
            // pdiv.style.border = '1px solid'
            pdiv.style.width = '50%';
            pdiv.innerHTML = '<h2> LOGO </h2>';
            // pdiv.style.display = 'flex';
            pdiv.style.marginLeft = '20px';
            pdiv.style.justifyContent = 'space-around';
        }

        if (pdiv.className == 'n2') {
            // pdiv.style.border = '1px solid';
            pdiv.style.width = '47%';
            pdiv.style.display = 'flex';
            pdiv.style.alignItems = 'center';
            const mbuts = document.createElement('div');
            let buttons = ['HOME', 'GALLERY', 'CONTACT', 'ABOUT'];
            for (let i = 0; i < buttons.length; i++) {
                const anc = document.createElement('a');
                anc.href = '#';
                anc.className = buttons[i];
                anc.id = buttons[i];
                anc.textContent = buttons[i];
                anc.style.textDecoration = 'none';
                anc.style.color = 'black';
                mbuts.appendChild(anc);
            }
            mbuts.id = 'mbuts';
            mbuts.style.width = '100%'
            mbuts.style.display = 'flex';
            mbuts.style.alignItems = 'center';
            mbuts.style.justifyContent = 'space-around';
            pdiv.appendChild(mbuts);
        }

        if (pdiv.className == 'n3') {
            pdiv.style.width = '3%';
            pdiv.style.display = 'flex';
            pdiv.style.alignItems = 'center';
            pdiv.style.marginRight = '20px';
            const hb = document.createElement('a');
            hb.href = '#';
            hb.innerHTML = '<i class="fa-solid fa-bars fa-lg"></i>';
            hb.id = 'hb';
            hb.style.display = 'none';
            hb.style.color = 'black';
            pdiv.appendChild(hb);
        }
    }

    if (window.matchMedia("(max-width: 768px)").matches) { 
       document.getElementById('n2').style.display = 'none';
       document.getElementById('hb').style.display = 'block';

       document.getElementById('hb').addEventListener("click", function(){
            if(document.getElementById('n2').style.display == 'none'){
                document.getElementById('n2').style.display = 'flex';
                document.getElementById('n2').style.width = '93%';
                document.getElementById('n2').style.border = '1px solid';
                document.getElementById('mbuts').style.display = 'block';
                document.getElementById('n2').style.position = 'absolute';
                document.getElementById('n2').style.top = '80px';
                document.getElementById('n2').style.padding = '20px';
                document.getElementById('HOME').style.display = 'block';
                document.getElementById('HOME').style.marginBottom = '10px';
                document.getElementById('GALLERY').style.display = 'block';
                document.getElementById('GALLERY').style.marginBottom = '10px';
                document.getElementById('CONTACT').style.display = 'block';
                document.getElementById('CONTACT').style.marginBottom = '10px';
                document.getElementById('ABOUT').style.display = 'block';
                document.getElementById('ABOUT').style.marginBottom = '10px';
            } else {
                document.getElementById('n2').style.display = 'none';
            }
            
       })
    } else {
        // document.body.style.backgroundColor = "pink";
    }
}
page()


