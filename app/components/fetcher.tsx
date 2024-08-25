"use client"
import React, { useEffect, useState } from 'react';

interface Commit {
  id: number;
  commit_hash: string;
  author_name: string;
  author_email: string;
  commit_date: string;
  message: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Commit[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/fetch-data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.commits);
        setLoading(false);
      } catch (err) {
        // setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Commit Data</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map((commit) => (
            <li key={commit.id}>
              <strong>Hash:</strong> {commit.commit_hash} <br />
              <strong>Author:</strong> {commit.author_name} <br />
              <strong>Email:</strong> {commit.author_email} <br />
              <strong>Date:</strong> {new Date(commit.commit_date).toLocaleString()} <br />
              <strong>Message:</strong> {commit.message}
            </li>
          ))}
        </ul>
      ) : (
        <div>No commits found.</div>
      )}
    </div>
  );
};

export default DataFetcher;
