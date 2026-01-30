import { useEffect, useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const response = await fetch("http://localhost:5000/api/contact");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to send message");

      setName("");
      setEmail("");
      setMessage("");
      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input style={styles.input} placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input style={styles.input} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <textarea style={styles.textarea} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
          <button style={styles.button}>Send</button>
        </form>
      </div>

      <div style={styles.list}>
        <h3>Messages from Database</h3>
        {contacts.map(item => (
          <div key={item._id} style={styles.item}>
            <p><b>Name:</b> {item.name}</p>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Message:</b> {item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles (same as before)
const styles = {
  container: { backgroundColor: "#f4f6f8", padding: "40px" },
  card: { backgroundColor: "#fff",color:"black", padding: "30px", maxWidth: "400px", margin: "0 auto", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  heading: { textAlign: "center", marginBottom: "20px", },
  input: { width: "100%", padding: "10px", marginBottom: "10px" },
  textarea: { width: "100%", height: "80px", padding: "10px", marginBottom: "10px" },
  button: { width: "100%", padding: "10px", backgroundColor: "#2c3e50", color: "white", border: "none" },
  list: { maxWidth: "600px", margin: "40px auto" },
  item: { backgroundColor: "#fff", color:"black", padding: "15px", marginBottom: "10px", borderRadius: "6px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
};

export default ContactForm;
