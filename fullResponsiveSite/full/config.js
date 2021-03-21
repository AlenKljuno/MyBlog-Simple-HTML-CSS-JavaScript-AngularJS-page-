var app = angular.module('app',[]);
app.controller('controller',function($scope){
    $scope.friends = [{name:'Zara', phone:'555-1276'},
                         {name:'Nike', phone:'800-384'},
                         {name:'Adidas', phone:'555-4321'},
                         {name:'Puma', phone:'555-5678'},
                         {name:'Coca Cola', phone:'555-8765'},
                         {name:'Valorant', phone:'555-5678'},
                        {name:'Dior',phone:'225-883'},
                        {name:'HugoBoss', phone:'800-558'},
                        {name:'Bershka', phone:'555-4321'},
                        {name:'H&M', phone:'555-5678'},
                        {name:'Mango', phone:'555-8765'},
                        {name:'LV', phone:'555-5678'},
                    ];
                    $scope.cartica = [
{img:'https://photos6.spartoo.com.hr/photos/165/16500832/16500832_1200_A.jpg',h3:'H%M Jeans'}
                    ];
                    $scope.cartica2 = [
                        {img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.jpg', h3:'Nike Shoes'},
                        
                    ];
                    $scope.cartica3 = [
                        {img:'https://www.accenture.com/t00010101T000000Z__w__/de-de/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global-3/99/Accenture-Adidas-Header-Image.jpg', h3:'Adidas Shoes'}
                    ];
                    $scope.cartica4 = [
                        {img:'https://moccacommerce.com/wp-content/uploads/2020/03/nike-trenerka-komplet-CJ4312-063-1.jpg', h3:'Nike Trainers'}
                    ]
})