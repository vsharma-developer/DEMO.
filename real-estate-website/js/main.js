const list = document.getElementById("propertyList");
const filter = document.getElementById("filterType");

function displayProperties(data) {
  list.innerHTML = "";

  data.forEach(property => {
    list.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card property-card">
          <img src="${property.image}" class="card-img-top">
          <div class="card-body">
            <h5>${property.title}</h5>
            <p>${property.location}</p>
            <p><strong>${property.price}</strong></p>
            <a href="property-details.html" class="btn btn-primary w-100">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Initial load
displayProperties(properties);

// Filter logic
filter.addEventListener("change", () => {
  const value = filter.value;

  if (value === "All") {
    displayProperties(properties);
  } else {
    const filtered = properties.filter(p => p.type === value);
    displayProperties(filtered);
  }
});
