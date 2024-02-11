var rotate = document.getElementsByClassName("common");
var uparrow= document.getElementsByClassName("fa-solid fa-angle-down");
var detail = document.getElementsByClassName("detail");
var main = document.getElementsByTagName("main");
const a = [0, 0, 0, 0, 0];
// let flag = 0;
const flag = [0, 0, 0, 0, 0];
rotate[0].addEventListener("mousedown", function(){
    if(a[0]==0){
        a[0] = 1;
        uparrow[0].style.transition = "0.5s";
        uparrow[0].style.rotate = "180deg";
        if(flag[0] == 0){
            let text = "<h3>Frontend</h3> <p>HTML, CSS, JavaScript, React(Pursuing)</p> <h3>Backend</h3> <p>JDBC, JSP/Servlet, DBMS(My SQL)</p> <h3>Tools</h3> <p>VS Code, PyCharm, Figma, Eclipse</p> <h3>Other Programming</h3> <p>Java, C, Python, Data Structure, OOPs, </p>";
            flag[0] = 1;
            rotate[0].style.borderBottom = "0px";
            detail[0].style.padding = "0% 0% 0% 3%";
            detail[0].innerHTML += text;
            detail[0].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
    }
    else{
        a[0] = 0;
        uparrow[0].style.transition = "0.5s";
        uparrow[0].style.rotate = "0deg";
        let text = "<h3>Programming</h3> <p>HTML, CSS, JavaScript, Java, C, Python, Data Structure, OOPs(pursuing)</p> <h3>Tools</h3> <p>VS Code, PyCharm, Figma.</p> <h3>Database</h3> <p>My SQL (pursuing)</p>";
        flag[0] = 0;
        rotate[0].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[0].style.padding = "0%";
        detail[0].innerHTML -= text;
        detail[0].innerHTML = "";
        detail[0].style.borderBottom = "0px";
    }
})

rotate[1].addEventListener("mousedown", function(){
    if(a[1]==0){
        uparrow[1].style.transition = "0.5s";
        uparrow[1].style.rotate = "180deg";
        if(flag[1] == 0){
            let text = "<h3>Solar System Based On Virtual Reality</h3> <p>Discription</p> <h3>Desktop Assisant</h3> <p>Associated with AKTU</p>";
            flag[1] = 1;
            rotate[1].style.borderBottom = "0px";
            detail[1].style.padding = "0% 0% 0% 3%";
            detail[1].innerHTML += text;
            detail[1].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[1] = 1;
    }
    else{
        a[1] = 0;
        uparrow[1].style.transition = "0.5s";
        uparrow[1].style.rotate = "0deg";
        let text = "<h3>Solar System Based On Virtual Reality</h3> <p>Discription</p> <h3>Desktop Assisant</h3> <p>Associated with AKTU</p>";
        flag[1] = 0;
        rotate[1].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[1].style.padding = "0%";
        detail[1].innerHTML -= text;
        detail[1].innerHTML = "";
        detail[1].style.borderBottom = "0px";
    }
})

rotate[2].addEventListener("mousedown", function(){
    if(a[2]==0){
        uparrow[2].style.transition = "0.5s";
        uparrow[2].style.rotate = "180deg";
        if(flag[2] == 0){
            let text = "<h3>Internships</h3> <p>hello world</p> <h3>Jobs</h3> <p>Fresher</p>";
            flag[2] = 1;
            rotate[2].style.borderBottom = "0px";
            detail[2].style.padding = "0% 0% 0% 3%";
            detail[2].innerHTML += text;
            detail[2].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[2] = 1;
    }
    else{
        a[2] = 0;
        uparrow[2].style.transition = "0.5s";
        uparrow[2].style.rotate = "0deg";
        let text = "<h3>Internships</h3> <p>hello world</p> <h3>Jobs</h3> <p>Fresher</p>";
        flag[2] = 0;
        rotate[2].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[2].style.padding = "0%";
        detail[2].innerHTML -= text;
        detail[2].innerHTML = "";
        detail[2].style.borderBottom = "0px";
    }
})

rotate[3].addEventListener("mousedown", function(){
    if(a[3]==0){
        uparrow[3].style.transition = "0.5s";
        uparrow[3].style.rotate = "180deg";
        if(flag[3] == 0){
            let text = "<h3>Bacholore of Technology (Pursuing)</h3> <p>Dr. A.P.J Abdul Kalam University(AKTU) Lucknow U.P</p> <h3>Intermediate  (2018-20)</h3> <p>Holy Child Academy Ruhhata Jaunpur</p> <h3>High School  (2016-18)</h3> <p>Surya Bali Shingh Public School Miyapur Jaunpur</p>";
            flag[3] = 1;
            rotate[3].style.borderBottom = "0px";
            detail[3].style.padding = "0% 0% 0% 3%";
            detail[3].innerHTML += text;
            detail[3].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[3] = 1;
    }
    else{
        a[3] = 0;
        uparrow[3].style.transition = "0.5s";
        uparrow[3].style.rotate = "0deg";
        let text = "<h3>Bacholore of Technology (Pursuing)</h3> <p>Dr. A.P.J Abdul Kalam University(AKTU) Lucknow U.P</p> <h3>Intermediate (2018-20)</h3> <p>Holy Child Academy Ruhhata Jaunpur</p> <h3>High School (2016-18)</h3> <p>Surya Bali Shingh Public School Miyapur Jaunpur</p>";
        flag[3] = 0;
        rotate[3].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[3].style.padding = "0%";
        detail[3].innerHTML -= text;
        detail[3].innerHTML = "";
        detail[3].style.borderBottom = "0px";
    }
})

rotate[4].addEventListener("mousedown", function(){
    if(a[4]==0){
        uparrow[4].style.transition = "0.5s";
        uparrow[4].style.rotate = "180deg";
        if(flag[4] == 0){
            let text = "<h3>Certification in Frontend Development</h3> <p>Udemy Course</p> <h3>Certification in Data Base Management System</h3> <p>Associated with AKTU</p>";
            flag[4] = 1;
            rotate[4].style.borderBottom = "0px";
            detail[4].style.padding = "0% 0% 0% 3%";
            detail[4].innerHTML += text;
            detail[4].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[4] = 1;
    }
    else{
        a[4] = 0;
        uparrow[4].style.transition = "0.5s";
        uparrow[4].style.rotate = "0deg";
        let text = "<h3>Certification in Frontend Development</h3> <p>Udemy Course</p> <h3>Certification in Data Base Management System</h3> <p>Associated with AKTU</p>";
        flag[4] = 0;
        rotate[4].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[4].style.padding = "0%";
        detail[4].innerHTML -= text;
        detail[4].innerHTML = "";
        detail[4].style.borderBottom = "0px";
    }
})