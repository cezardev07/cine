document.querySelector('h3.title').style.color='rgb(221, 8, 8)'
        document.querySelector('h3.title').style.boxShadow='10px 10px 3000px 10px white';

        let listVideo = document.querySelectorAll('.video-list .vid');
        let mainVideo = document.querySelector('.main-video video');
        let title = document.querySelector('.main-video .title');

        listVideo.forEach(video =>{
            video.onclick = () =>{
                listVideo.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');
                if(video.classList.contains('active')){
                    let src = video.children[0].getAttribute('src');
                    mainVideo.src = src;

                    let text = video.children[1].innerHTML;
                    title.innerHTML = text;
                };
            };
        });
