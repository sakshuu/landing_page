import React from 'react'
import  "./../assets/css/footer.css";

const MyFooter = () => {

 const  pagefooter = ["Home", "About", "Home", "About"]

  return <>
   <footer className="text-muted py-5 mainfooter">
  <div className="container">

<div className="row">
    {
pagefooter.map(item => <>
 <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
    <h6><i className="bi bi-house-add-fill p-2"></i>{item}</h6>
    </div>
</>)
    }
</div>
<p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero minus voluptatum laudantium commodi, cumque ex mollitia pariatur fugiat quidem vero accusamus architecto? Hic impedit inventore placeat debitis, magni harum!lore-sm- lore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero minus voluptatum laudantium commodi, cumque ex mollitia pariatur fugiat quidem vero accusamus architecto? Hic impedit inventore placeat debitis, magni harum!lore-sm- lore</p>
<div className='contactsection'>

<h5>Contact with us</h5>
<div>
<span><i className="bi bi-envelope-at-fill p-2"></i></span>
<span>sakshissachin.120@gmail.com</span>
</div>
<div className='mt-2'>
<span><i className="bi bi-person-rolodex p-2"></i></span>
<span>8787878776</span>

</div>
<div className='p-2'>
    <span><i class="bi bi-instagram p-2"></i></span>
    <span><i class="bi bi-youtube p-2"></i></span>
    <span><i class="bi bi-linkedin p-2"></i></span>
</div>
</div>
  </div>
  </footer>
  </>
}

export default MyFooter