import React, { useState } from "react";
import UserNavbar from "../../components/userNavigation";

const Listing: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare FormData to include image upload
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("quantity", form.quantity);
    if (image) {
      formData.append("image", image);
    }

    // Simulate submission
    console.log("Form submitted:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    alert("Item listed successfully!");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <h3 className="mb-4 text-center">List an Item for Sale</h3>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label>Title</label>
            <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea className="form-control" name="description" value={form.description} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Category</label>
            <select className="form-select" name="category" value={form.category} onChange={handleChange}>
              <option value="">-- Select Category --</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="furniture">Furniture</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Price (R)</label>
            <input type="number" className="form-control" name="price" value={form.price} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Quantity</label>
            <input type="number" className="form-control" name="quantity" value={form.quantity} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Upload Image</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Submit Listing</button>
          </div>
        </form>
      </div>
      <footer className="bg-light shadow-lg mt-auto">
        <UserNavbar />
      </footer>
    </div>
  );
};

export default Listing;
