
const useCarousel=()=>{
    $(document).ready(()=>{
       
            console.log('hello')
            // Owl Carousel
            //var owl = $(".owl-carousel");
            console.log(owl)
            owl.owlCarousel({
                    items: 3,
                    margin: 10,
                    loop: true,
                    nav: true
                    });
        });
}
export default useCarousel