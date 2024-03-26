
// get all questions 
export async function getQuestions(req, res) {
  res.json("questions api get request ");
}


// insert all questions 
export async function insertQuestions(req, res) {
  res.json("questions api post request ");
}

// delete all questions
export async function dropQuestions(req, res) {
  res.json("questions api delete request ");
}


export async function getResult(req, res) {
  res.json("result api get request ");
}

export async function storeResult(req, res) {
  res.json("result api post request ");
}

export async function dropResult(req, res) {
  res.json("result api delete request ");
}
