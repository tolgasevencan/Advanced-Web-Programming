var qtyTotal = 0;
    var priceTotal = 0;
    var products = [];


    function addProduct() {
        var productID = document.getElementById("productID").value;
        var product_desc = document.getElementById("product_desc").value;
        var qty = document.getElementById("quantity").value;
        // qtyTotal = qtyTotal + parseInt(qty);
        //document.getElementById("qtyTotals").innerHTML=qtyTotal;
        var price = document.getElementById("price").value;

        var newProduct = {

            product_id : null,
            product_desc : null,
            product_qty : 0,
            product_price : 0.00,
        };

        newProduct.product_id = productID;
        newProduct.product_desc = product_desc;
        newProduct.product_qty = qty;
        newProduct.product_price = price;

        products.push(newProduct);

        //console.log("New Product " + JSON.stringify(newProduct))
        //console.log("Products " + JSON.stringify(products))

         var html = "<table border='1|1' >";
        for (var i = 0; i < products.length; i++) {
        html+="<tr>";
        html+="<td>"+products[i].product_id+"</td>";
        html+="<td>"+products[i].product_desc+"</td>";
        html+="<td>"+products[i].product_qty+"</td>";
         html+="<td>"+products[i].product_price+"</td>";

        html+="</tr>";

    }
    html+="</table>";
document.getElementById("demo").innerHTML = html;

        document.getElementById("resetbtn").click()            
}
    function deleteProduct(node){    
        r=node.parentNode.parentNode;
        r.parentNode.removeChild(r);
}
