import Document from "../models/Document.js";

// Upload Document
export const createDocument = async (req, res) => {
  try {

    const { startup, title, description, fileUrl } = req.body;

    const document = await Document.create({
      startup,
      title,
      description,
      fileUrl,
      uploadedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Document uploaded successfully",
      document,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Documents
export const getDocuments = async (req, res) => {
  try {

    const documents = await Document.find()
      .populate("startup")
      .populate("uploadedBy", "fullName email");

    res.json({
      success: true,
      count: documents.length,
      documents,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Document By ID
export const getDocumentById = async (req, res) => {
  try {

    const document = await Document.findById(req.params.id)
      .populate("startup")
      .populate("uploadedBy", "fullName email");

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    res.json({
      success: true,
      document,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Update Document
export const updateDocument = async (req, res) => {
  try {

    const document = await Document.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Document updated successfully",
      document,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Document
export const deleteDocument = async (req, res) => {
  try {

    await Document.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Document deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};