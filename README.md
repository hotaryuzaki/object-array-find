# object-array-find

this is for searching data in array contain objects data.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Object Array find data</title>
  </head>
  <body>
    <p id="demo"></p>

    <script>
      // EXAMPLE WE HAVE OBJECT WHICH CONTAIN ORDERS ARRAY WHICH CONTAIN OBJECTS PRODUCTS
      let arr = {
        orders: [
          {
            product_id: 1664,
            product_name: "Bakso Sapi",
            quantity: 1,
            order_price: 84900,
          },
          {
            product_id: 429,
            product_name: "Bakso Urat",
            quantity: 2,
            order_price: 28900,
          },
          {
            product_id: 566,
            product_name: "Bakso Premium",
            quantity: 1,
            order_price: 78000,
          },
          {
            product_id: 1232,
            product_name: "Bakso Telur",
            quantity: 4,
            order_price: 28900,
          },
        ],
      };

      const _arrayFind = (items, valueItem, keyItem) => {
        if (items.length > 0) {
          const find = items.find((item) => item[keyItem] == valueItem);
          return find;
        }
      };

      // IF YOU PREFER RETURN VALUE OUTSIDE CONDITION STATEMENT
      const _arrayFindIndex = (items, valueItem, keyItem) => {
        let findIndex;
        if (items.length > 0) {
          findIndex = items.findIndex((item) => item[keyItem] === valueItem);
        }

        return findIndex;
      };

      const data = _arrayFind(arr.orders, 1232, "product_id");
      const index = _arrayFindIndex(arr.orders, 1232, "product_id");

      document.getElementById("demo").innerHTML = `${index} ${data.product_name}`;
    </script>
  </body>
</html>

```


