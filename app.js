

//the news api
const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6ea3854e4a1442d0a682b18448030327';
//the fetch function
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  //getting all the data results in an object
  let authors = data.articles;
//creating an html title element from javascript
  let result = `<h2> Latest News</h2>`;
  //using for loop to go through the items and print them out
  authors.forEach((news) => {
    //accessing the object element for the required item
    const { urlToImage, title, description, content, publishedAt, author, url } = news
    //creating a div element on javascript assigning it to a variable
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
  //passing the variable to an html id
    document.getElementById('results').innerHTML = result;


  });

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