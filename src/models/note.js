// src/models/student.js

import { model, Schema } from 'mongoose';

export const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      trim: true,
      type: String,
      default: '',
    },
    tag: {
      type: String,
      enum: [
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
        'Work',
        'Personal',
        'Meeting',
      ],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

noteSchema.index({ tag: 1 });

export const Note = model('Note', noteSchema);
