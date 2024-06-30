// pendingSupplier.model.js
import mongoose from 'mongoose';

const pendingSupplierSchema = new mongoose.Schema({
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
    }
}, { timestamps: true });

const PendingSupplier = mongoose.model('PendingSupplier', pendingSupplierSchema);

export default PendingSupplier;
