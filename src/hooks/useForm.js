import { useState } from 'react';

export default function useForm(defaultValue = {}) {
  const [form, setForm] = useState(defaultValue);

  const onChangeForm = (newForm) => setForm({ ...form, ...newForm });

  const resetForm = () => setForm({});

  return [form, onChangeForm, resetForm];
}
