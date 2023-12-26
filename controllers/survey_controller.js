const Survey = require("../models/survey");

module.exports.submit = async (req, res) => {
  try {
    const survey = await Survey.create(req.body);
    if (!survey) throw new Error("Survey not submitted");
    res
      .status(200)
      .json({ success: true, message: "Survey submitted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
