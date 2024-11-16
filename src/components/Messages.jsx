import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "./Message";

export const Messages = () => {
  const [emails, setEmails] = useState([]);
  // search box logic 50% for navbar
  const { searchText } = useSelector((store) => store.appSlice);
  const [tempEmail, setTempEmail] = useState(emails);
  const dispatch = useDispatch();
  // this function are use to sorting a data by descding orderd
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(allEmails);
      dispatch(setEmails(allEmails));
    });
    // cleanup
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filterEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    setTempEmail(filterEmail);
  }, [searchText, emails]); // when function are call after use
  return (
    <>
      <div>
        {tempEmail &&
          tempEmail?.map((email) => {
            return (
              <>
                <div key={email}>
                  <Message email={email} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
