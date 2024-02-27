const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "get all contacts" });
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (request, response) => {
  console.log("The request body is :", request.body);
  const { name, email, phone } = request.body;
  if (!name || !email || !phone) {
    response.status(400);
    throw new Error("all fields are mandatory");
  }
  response.status(200).json({ message: "create contact" });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (request, response) => {
  response
    .status(200)
    .json({ message: `Get contact for ${request.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (request, response) => {
  response
    .status(200)
    .json({ message: `Update contact for ${request.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (request, response) => {
  response
    .status(200)
    .json({ message: `Delete contact for ${request.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
