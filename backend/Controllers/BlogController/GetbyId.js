const Blogdb = require('../../models/BlogModel')

const getBlogById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    await Blogdb.findById(id)
        .then((response) => {
            if (!response) {
                // console.log("Blog not found");
                return res.status(404).json({ message: "Blog not found" });
            }
            // console.log("Blog found:", response);
            res.status(200).json(response);
        })
        .catch((error) => {
            console.error("Error fetching blog:", error);
            res.status(500).json({ message: "Internal server error" });
        });
};





module.exports = getBlogById ;