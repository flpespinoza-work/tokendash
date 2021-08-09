@props([
    'disabled' => false,
    'type' => "text",
    'label' => "",
    'placeholder' => "",
    'required' => false
])

<div class="space-y-1">
    @if ($label ?? null)
        <label for="" class="text-xs font-semibold text-gray-600">{{ $label }}</label>
    @endif

    <input
        {{ $disabled ? 'disabled' : '' }}
        type="{{ $type }}"
        required="{{ $required }}"
        {!! $attributes->merge(['class' => 'w-full border-2 border-gray-200 rounded-sm focus:ring-gray-50 focus:border-gray-300 focus:bg-white bg-gray-lighter hover:bg-gray-100']) !!}
    />
</div>
