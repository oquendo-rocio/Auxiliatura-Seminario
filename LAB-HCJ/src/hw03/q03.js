const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

  const ul = document.createElement("ul");
  buyList.forEach(item =>{
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  root.appendChild(ul);