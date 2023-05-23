import { Contact } from "../models/Contact.js";

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  const data = await Contact.create({
    name: name,
    email: email,
    message: message,
  });
  res.status(201).json({
    success: true,
    data,
  });
};
