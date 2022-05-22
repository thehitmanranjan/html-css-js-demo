fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    let x
    const targetDiv = document.getElementById("flashDealsDiv")
    for (x in data) {
      let newDiv = document.createElement("div");
      let newPara = document.createElement("p");
      let newImage = document.createElement("img");
      let newHeader = document.createElement("h3");
      let gridDiv = document.createElement("div");
      let newPara2 = document.createElement("p");
      let newButton = document.createElement("a");
      let newTopHeader
      let timeText
      let timeSubText

      if (x == 3) {
        newDiv.setAttribute("class", "flash-deals__content__card deal-of-the-day")
      }
      else {
        newDiv.setAttribute("class", "flash-deals__content__card")
      }

      newPara.innerHTML = "Sale"
      newPara.setAttribute("class", "flash-deals__content__card__sale-text")

      newImage.setAttribute("class", "flash-deals__content__card__image")
      newImage.src = data[x].image
      if (x == 3) {
        newImage.width = "125"
        newImage.height = "125"
      }
      else {
        newImage.width = "180"
        newImage.height = "180"
      }

      newHeader.innerHTML = data[x].name
      newHeader.setAttribute("class", "flash-deals__content__card__card-title")

      gridDiv.setAttribute("class", "grid-container-2")

      newPara2.innerHTML = "<del> " + data[x].old_price + " </del> " + "<b>" + data[x].new_price + "</b>"
      newPara2.setAttribute("class", "flash-deals__content__card__price")

      newButton.href = "#"
      newButton.innerHTML = "Shop Now"
      newButton.setAttribute("class", "flash-deals__content__card__button")

      if (x == 3) {
        newTopHeader = document.createElement("h3");
        timeText = document.createElement("p");
        timeSubText = document.createElement("p")

        newTopHeader.innerHTML = "DEAL OF THE DAY"
        timeText.innerHTML = "12 : 43 : 12"
        timeSubText.innerHTML = "hour &nbsp;&nbsp;&nbsp; min &nbsp;&nbsp;&nbsp; sec"
      }
      targetDiv.appendChild(newDiv)
      if (x == 3) {
        newDiv.appendChild(newTopHeader)
        newDiv.appendChild(timeText)
        newDiv.appendChild(timeSubText)
      }
      else {
        newDiv.appendChild(newPara)
      }
      newDiv.appendChild(newImage)
      newDiv.appendChild(newHeader)

      if (x != 3) {
        gridDiv.appendChild(newPara2)
        gridDiv.appendChild(newButton)

        newDiv.appendChild(gridDiv)
      }
      else {
        newDiv.appendChild(newPara2)
      }

    }
  });
