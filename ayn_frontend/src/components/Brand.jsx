import images from "../constants/images"

const Brand = () => {
  return (
    <section className="m-5">
      <div className="container">
        <ul className="list-inline d-flex justify-content-evenly">
          <li className="list-inline-item">
            <img src={images.slack} alt="brand-1" />
          </li>
          <li className="list-inline-item">
            <img src={images.shopify} alt="brand-2" />
          </li>
          <li className="list-inline-item">
            <img src={images.google} alt="brand-3" />
          </li>
          <li className="list-inline-item">
            <img src={images.dropbox} alt="brand-4" />
          </li>
          <li className="list-inline-item">
            <img src={images.atlassian} alt="brand-5" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Brand