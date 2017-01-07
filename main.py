import webapp2

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write(open('index.html').read())

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
