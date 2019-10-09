// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxk7Oug_e145W1Vy3qy_cpewjmaQmq8U4",
    authDomain: "kuchendesign-2afe3.firebaseapp.com",
    databaseURL: "https://kuchendesign-2afe3.firebaseio.com",
    projectId: "kuchendesign-2afe3",
    storageBucket: "kuchendesign-2afe3.appspot.com",
    messagingSenderId: "1027409292236",
    appId: "1:1027409292236:web:19a147f569f839aee68b69"
};

function readDataFromFirebase() {
    return firebase.database().ref('/Productos').once('value').then(function(snapshot) {
        var productos = snapshot.val();
        for(var i = 0; i < productos.length; i++) {
            let product = productos[i];
            let type = "product";
            let imageurl = product.img_url;
            console.log(imageurl)
            let productname = product.title;

            //$("#myfilter").append(` <li data-filter=".${type}">type</li>`)
            $("#myproducgalery").append(
                ` <div class="grid-item ${type}">
                            <div class="portfolio-box-01">
                                <div class="portfolio-img">
                                    <img src="${imageurl}" title="" alt="">
                                </div>
                                <div class="portfolio-info">
                                    <a href="${imageurl}" class="gallery-link">
                                        <i></i>
                                    </a>
                                    <h5><a href="#">${productname}</a></h5>
                                </div>
                            </div>
                        </div>`)
        }
    });
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
readDataFromFirebase();