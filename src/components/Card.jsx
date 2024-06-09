export function Cards(dog) {
  return (
    <>
      <div className="card-potrait">
        <div className="img-box-potrait1">
    {dog.imgSrc}
        </div>
        <div className="dog-info">
          <p>
            <span>Breed:</span>
            {dog.breed}
          </p>
          <p>
            <span>Name:</span>
            {dog.name}
          </p>
        </div>
        <div className="purchase-info">
          <p>
            <span>Price:</span>{dog.price}
          </p>
          <button>Adopt</button>
        </div>
      </div>
    </>
  );
}
