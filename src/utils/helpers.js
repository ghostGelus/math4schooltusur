let URL = ''
if (process.env.NODE_ENV === "development") {
  // URL = 'http://localhost:3000'
  URL = ''
// URL = 'https://math4school.herokuapp.com'
} else {
    URL = 'https://math4schooltusur.herokuapp.com'
}

export const baseUrl = URL
