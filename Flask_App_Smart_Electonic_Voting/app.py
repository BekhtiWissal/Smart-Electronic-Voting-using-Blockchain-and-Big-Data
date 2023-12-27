from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':

        return redirect(url_for('vote'))

    return render_template('index.html')

@app.route('/vote', methods=['GET', 'POST'])
def vote():
    if request.method == 'POST':
        selected_party = request.form.get('party')

        return render_template('confirmation.html', party=selected_party)

    return render_template('vote.html')

if __name__ == '__main__':
    app.run(debug=True)
