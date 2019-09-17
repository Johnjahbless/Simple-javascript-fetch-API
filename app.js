
const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ea3854e4a1442d0a682b18448030327';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.articles;
  let result = `<h2> Latest News</h2>`;
  authors.forEach((user) => {
    const { urlToImage, title, description, content, publishedAt, author, url } = user
    result +=
    `<div>
        <ul class="w3-ul">
            <img height="20%" width="20%" src="${urlToImage}"/>
            <h3>${title}</h3>
            <p>${description}</p>
            <p>${content}</p>
            <i>${publishedAt}</i>
            <i>${author}<i>
            <a id="button" target="blank" href="${url}">Read more....</a>
        </ul>
    </div>`;
  
    document.getElementById('results').innerHTML = result;


  });
  /*
  return authors.map(function(author) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = author.urlToImage;
    span.innerHTML = `${author.author} ${author.title}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  }) */
})
.catch(function(error) {
  console.log(error);
}); 




/*


  <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init("user_xsLcg0j3tAqDFGSKf2lO3");
   })();
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>
var doc = new jsPDF()

var sub = document.getElementById('submit');


sub.addEventListener('click', () => {
    //doc.text('Hello world!', 10, 10)
    var service_id = 'gmail';
var template_id = 'contact';
var template_params = {
    email:"jonnyjohn243@gmail.com",
name: 'John',
from_email:"juneapps12@gmail.com",
message: 'This is awesome!'
};

emailjs.send(service_id,template_id,template_params)
.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });
    //doc.save('a4.pdf')
});
*/