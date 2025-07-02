const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Nama produk harus diisi'] 
  },
  price: { 
    type: Number, 
    required: true,
    min: [100, 'Harga minimal Rp 100'] 
  },
  stock: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Model simpel tanpa method kompleks
module.exports = mongoose.model('Product', productSchema);