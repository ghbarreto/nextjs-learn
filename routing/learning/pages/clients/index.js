import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'gabe', name: 'gabriel' },
    { id: 'thatha', name: 'thais' },
  ];

  return (
    <div>
      <h1>The clients page</h1>

      <ul>
        {clients.map(client => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
