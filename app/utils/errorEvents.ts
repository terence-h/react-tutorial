// utils/errorEvents.ts
import { EventEmitter } from 'events';

const errorEmitter = new EventEmitter();

export const RESET_ERROR_BOUNDARY = 'resetErrorBoundary';

export const triggerResetErrorBoundary = (id: number) => {
    errorEmitter.emit(RESET_ERROR_BOUNDARY, id);
};

export default errorEmitter;