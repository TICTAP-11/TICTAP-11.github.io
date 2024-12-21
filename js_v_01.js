
// 202100960 송민관의 자바스크립트 파일

/* <input type="button" value="change theme color" onclick="
            
        if (document.querySelector('body').style
        .backgroundColor == 'white') {
            document.querySelector('body').style
            .backgroundColor = 'black'
            document.querySelector('body').style
            .color = 'white'
        }
        else {document.querySelector('body').style
            .backgroundColor = 'white'
            document.querySelector('body').style
            .color = 'black'
            };

            //document.write(alert('clicked'));

        "></input> */


current_iframe_src = 0;


let theme = 0;

function change_theme() {
    if (theme == 0) {
            alert("준비중 입니다..");
    }
    else {

    }
}

function change_viewer_1_src(src) {

    document.getElementById("id_img_viewer_1").src = src;

}

function change_viewer_2_src(src) {

    document.getElementById("id_img_viewer_2").src = src;

}

// html 내부 sctipt 블록이나, 인라인 방식으로 더 작성함.
