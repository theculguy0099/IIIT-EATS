# IIIT-EATS - Intra Campus Food Delivery System !

## Environment Variables
- Create a .env file in the backend folder which should look like:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
```

## Usage

- Backend :
```
nodemon server.js
```
- Admin (port-5173):
```
npm install
npm run dev 
```
- Frontend (port-5174):
```
npm install
npm run dev
```

### Note: 
- A script is also present in the backend folder for adding pre-defined food list to the portal for seamless usage.