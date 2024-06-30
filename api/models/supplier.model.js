// supplier.model.js
import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    supplierName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;
